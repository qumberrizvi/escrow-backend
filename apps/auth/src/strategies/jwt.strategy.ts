import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JwtUtil } from '../utils/jwt.util';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    // noinspection JSUnusedGlobalSymbols
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKeyProvider: async (_request, _rawJwtToken, done) => {
        let secret: string;
        let err: any;
        try {
          secret = await JwtUtil.secret();
        } catch (error) {
          err = error;
        }
        done(err, secret);
      },
    });
  }

  async validate(payload: any) {
    return {
      id: payload.sub,
      nonce: payload.nonce,
      organizationId: payload.org,
    };
  }
}
