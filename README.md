# Qushah Backend

## Description

Qushah Escrow System backend containing microservices, gateway, libs, etc.

## Project setup

```bash
$ pnpm install
```

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

## Structure

```
qushah-backend/
│
├── apps/
│   ├── qushah-auth/        # Authentication Service
│   ├── qushah-users/       # User Management Service
│   ├── qushah-escrow/      # Escrow and Deposits Service
│   ├── qushah-payments/    # Payments and Transactions Service
│   ├── qushah-properties/  # Property Listings Service
│   ├── qushah-notify/      # Notifications Service
│   └── qushah-gateway/     # API Gateway (separate app within the repo)
│
└── libs/                   # Shared Libraries (for DTOs, Interfaces, etc.)
    ├── common/             # Common utilities, interceptors, and guards
    ├── graphql/            # Shared GraphQL schemas and resolvers
    └── db/                 # Database connection and models

```

## Architecture

```
            [Frontend (Angular)]
                     │
              [GraphQL Gateway]
                     │
     ┌──────────┬────────────┬──────────────┬───────────┐
     │          │            │              │           │
 [Auth]     [Users]     [Properties]     [Escrow]    [Payments]
     │                                      │
 [Notify]                                [Disputes]

```

## Concerns

Here are the key concerns for each microservice in this architecture:

### 1. **qushah-auth** (Authentication and Authorization)
- **Security**: Ensuring the system is secure from unauthorized access. This includes strong password policies, token-based authentication (e.g., JWT), and OAuth if required.
- **Token Expiry and Refresh**: Managing token expiration and refresh mechanisms. Implement token blacklisting for security.
- **Rate Limiting**: Protecting against brute-force attacks by implementing rate limiting or CAPTCHA.
- **Secure API Communication**: Ensuring all communication (especially authentication data) is encrypted with HTTPS.
- **User Roles and Permissions**: Managing user roles and ensuring each user (tenant, landlord, admin) has the correct permissions for their actions.

### 2. **qushah-users** (User Management)
- **User Data Management**: Ensuring that personal data is secure, especially sensitive information like emails, addresses, and phone numbers.
- **Data Privacy**: Complying with regulations like GDPR or CCPA, especially regarding the collection and storage of user data.
- **User Profile Updates**: Allowing users to update their profiles (e.g., changing names, contact details) while maintaining data integrity.
- **Error Handling**: Handling errors effectively, such as invalid user data, and providing clear feedback to users.
- **Scalability**: Ensuring the system can handle large numbers of users (tenants, landlords).

### 3. **qushah-properties** (Property Management)
- **Property Data Validation**: Ensuring that property details are accurate, complete, and properly validated before being listed.
- **Search Functionality**: Providing a fast and efficient way for tenants to search for properties (by location, price, features, etc.).
- **Property Availability**: Managing the availability of properties and preventing double-booking or issues with properties already rented.
- **Image and Media Handling**: Handling and storing images, videos, and 3D scans securely and efficiently. Integrating with media service when required.
- **Data Consistency**: Ensuring that any updates to the property data (e.g., status changes, price updates) are consistent and reflected across all services.

### 4. **qushah-escrow** (Escrow Service)
- **Deposit Security**: Ensuring that the deposit is secure, especially when handling large amounts of money.
- **Transaction Auditing**: Providing an auditable trail of deposit and release actions for transparency and security.
- **Escrow Release Conditions**: Implementing clear rules on when the deposit should be released to either the tenant or landlord.
- **Dispute Management**: Handling any disputes regarding the deposit, such as property damage or failure to pay rent.
- **Compliance**: Ensuring that escrow services comply with local financial and regulatory standards (especially for handling money).
- **Event-Driven Updates**: Integrating with other services (e.g., notifying users about escrow releases or disputes) using event-driven architecture.

### 5. **qushah-payments** (Payment Service)
- **Payment Gateway Integration**: Integrating with external payment providers (e.g., UPI, Paytm, Razorpay) for processing payments.
- **Transaction Security**: Ensuring secure handling of payments and sensitive financial data. Use of encryption and secure protocols.
- **Transaction Failures**: Handling payment failures and retries in case of network or gateway issues.
- **Payment Confirmation**: Sending clear confirmation of successful payments and generating receipts.
- **Recurring Payments**: Supporting recurring rent payments (e.g., monthly payments) and ensuring they are processed on time.
- **Multi-currency Support**: Initially handling INR and later possibly adding other currencies, without complicating the architecture.
- **Scalability**: Ensuring the service can handle large volumes of transactions, especially for a growing user base.

### 6. **qushah-notify** (Notification Service)
- **Notification Delivery**: Ensuring timely delivery of notifications (SMS, email, push notifications) to users.
- **Message Templates**: Using dynamic templates for notifications (e.g., rent payment reminders, property status updates).
- **Multi-channel Support**: Ensuring support for multiple communication channels (SMS, email, mobile push notifications, etc.).
- **Handling Failures**: Managing failed notification deliveries and retries, e.g., if an email service is down.
- **Personalization**: Allowing notifications to be personalized based on user preferences (e.g., notification frequency, type of notifications).
- **Opt-in/Opt-out Preferences**: Allowing users to manage their notification preferences (e.g., unsubscribing from specific types of notifications).

### 7. **qushah-media** (Media Handling)
- **Storage**: Securely storing large media files (images, videos, 3D scans) and ensuring they are easily accessible.
- **Performance**: Ensuring that media uploads and downloads are fast and efficient, especially for large files.
- **Scalability**: Managing storage at scale as media files (especially 3D scans) can consume significant space.
- **Compression and Optimization**: Automatically compressing and optimizing media files for faster loading times and reduced storage usage.
- **Security**: Protecting media files from unauthorized access and ensuring that the uploaded files are virus-free.
- **Integration**: Providing an easy API for other microservices to use (e.g., for uploading profile pictures, property images, etc.).

### 8. **qushah-gateway** (API Gateway)
- **Request Routing**: Efficiently routing requests to the appropriate microservice based on the endpoint and service.
- **Security**: Ensuring that requests passing through the gateway are authenticated and authorized.
- **Load Balancing**: Ensuring requests are distributed evenly across multiple instances of each microservice for scalability.
- **Rate Limiting**: Preventing abuse of the system by applying rate limits on specific endpoints.
- **API Documentation**: Providing clear API documentation (e.g., using Swagger or GraphQL introspection) for the frontend and third-party developers.
- **Caching**: Implementing caching for high-traffic endpoints to improve performance.
