export class RegistrationStatus {
    success: boolean
    message: string
}

export class TokenStatus {
    expiresIn: string
    accessToken: string
}

export class LoginStatus {
    success: boolean
    message: string
    info?: any
}