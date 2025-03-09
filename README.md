# Qushah Backend

## Description

Qushah Escrow System backend containing microservices, gateway, libs, etc.

# Prerequisites

To be able to run this project on machine, the following must be installed:

- NodeJS 22 LTS
- pnpm
- Redis

## Project setup

Make sure `pnpm` is installed

```bash
$ npm install --global pnpm
```

Install dependencies

```bash
$ pnpm install
```

## Install Redis

Follow the official docs to [install Redis on your machine](https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/).

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Typeorm CLI Helper Tool

The Typeorm CLI Helper tool lets you run typeorm CLI commands without worrying
about DataSources and path resolutions.
[Learn how to use the tool here.](https://escrow-backend-docs.vercel.app/additional-documentation/running-migrations-and-seeders.html)

## Structure

```
qushah-backend/
│
├── apps/
│   ├── auth/        # Authentication Service
│   ├── user/       # User Management Service
│   ├── escrow/      # Escrow and Deposits Service
│   ├── organization/    # Organization management Service
│   ├── payment/    # Payments and Transactions Service
│   ├── property/  # Property Listings Service
│   ├── notification/      # Notifications Service
│   └── gateway/     # API Gateway (separate app within the repo)
│
└── libs/                   # Shared Libraries (for DTOs, Interfaces, etc.)
    └── common/             # Common utilities, interceptors, and guards

```

## Architecture

```
            [Frontend (Angular)]
                     │
              [GraphQL Gateway]
                     │
     ┌──────────┬─────┬───────┬──────────────┬───────────┐
     │          │     │       │              │           │
 [Auth]     [User]    │ [Property]     [Escrow]    [Payment]
     │                │                      │
 [Notification]      [Organization]        [Disputes]

```

## Concerns

Here are the key concerns for each microservice in this architecture:

### 1. **auth** (Authentication and Authorization)
- **Security**: Ensuring the system is secure from unauthorized access. This includes strong password policies, token-based authentication (e.g., JWT), and OAuth if required.
- **Token Expiry and Refresh**: Managing token expiration and refresh mechanisms. Implement token blacklisting for security.
- **Rate Limiting**: Protecting against brute-force attacks by implementing rate limiting or CAPTCHA.
- **Secure API Communication**: Ensuring all communication (especially authentication data) is encrypted with HTTPS.
- **User Roles and Permissions**: Managing user roles and ensuring each user (tenant, landlord, admin) has the correct permissions for their actions.

### 2. **user** (User Management)
- **User Data Management**: Ensuring that personal data is secure, especially sensitive information like emails, addresses, and phone numbers.
- **Data Privacy**: Complying with regulations like GDPR or CCPA, especially regarding the collection and storage of user data.
- **User Profile Updates**: Allowing users to update their profiles (e.g., changing names, contact details) while maintaining data integrity.
- **Error Handling**: Handling errors effectively, such as invalid user data, and providing clear feedback to users.
- **Scalability**: Ensuring the system can handle large numbers of users (tenants, landlords).

### 3. **property** (Property Management)
- **Property Data Validation**: Ensuring that property details are accurate, complete, and properly validated before being listed.
- **Search Functionality**: Providing a fast and efficient way for tenants to search for properties (by location, price, features, etc.).
- **Property Availability**: Managing the availability of properties and preventing double-booking or issues with properties already rented.
- **Image and Media Handling**: Handling and storing images, videos, and 3D scans securely and efficiently. Integrating with media service when required.
- **Data Consistency**: Ensuring that any updates to the property data (e.g., status changes, price updates) are consistent and reflected across all services.

### 4. **escrow** (Escrow Service)
- **Deposit Security**: Ensuring that the deposit is secure, especially when handling large amounts of money.
- **Transaction Auditing**: Providing an auditable trail of deposit and release actions for transparency and security.
- **Escrow Release Conditions**: Implementing clear rules on when the deposit should be released to either the tenant or landlord.
- **Dispute Management**: Handling any disputes regarding the deposit, such as property damage or failure to pay rent.
- **Compliance**: Ensuring that escrow services comply with local financial and regulatory standards (especially for handling money).
- **Event-Driven Updates**: Integrating with other services (e.g., notifying users about escrow releases or disputes) using event-driven architecture.

### 5. **organization** (Organization Management)
- **Multi-Tenant Support**: Managing organizations and their members, ensuring proper isolation between different organizations.
- **Access Control**: Implementing role-based access control within organizations.
- **Billing and Subscriptions**: Managing organization-level billing and payments.
- **Organization Verification**: Ensuring that organizations are verified before allowing transactions.

### 6. **payment** (Payment Service)
- **Payment Gateway Integration**: Integrating with external payment providers (e.g., UPI, Paytm, Razorpay) for processing payments.
- **Transaction Security**: Ensuring secure handling of payments and sensitive financial data. Use of encryption and secure protocols.
- **Transaction Failures**: Handling payment failures and retries in case of network or gateway issues.
- **Payment Confirmation**: Sending clear confirmation of successful payments and generating receipts.
- **Recurring Payments**: Supporting recurring rent payments (e.g., monthly payments) and ensuring they are processed on time.

### 7. **notification** (Notification Service)
- **Notification Delivery**: Ensuring timely delivery of notifications (SMS, email, push notifications) to users.
- **Opt-in/Opt-out Preferences**: Allowing users to manage their notification preferences.

### 8. **gateway** (API Gateway)
- **Request Routing**: Efficiently routing requests to the appropriate microservice based on the endpoint and service.
- **Security**: Ensuring that requests passing through the gateway are authenticated and authorized.
