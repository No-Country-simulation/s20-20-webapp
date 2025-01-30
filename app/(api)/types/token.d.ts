export interface Token {
  exp?: number;
  [key: string]: unknown; // Otros campos del token
}
