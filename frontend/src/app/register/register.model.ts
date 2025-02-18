export interface RegisterRequest {
    accountType: string; // "individual" or "organization"
    email: string;
    password: string;
    terms: boolean;
    companyName?: string; // Optional; provided only for organizations
}


export interface RegisterResponse {
    success: boolean;
    message: string;
    // Optionally, you may return a token or user data if your API supports that:
    token?: string;
    user?: {
        id: string;
        email: string;
        accountType: string;
        companyName?: string;
    };
}
