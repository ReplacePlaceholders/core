declare const replacePlaceholders: (
  message: string,
  params: Record<string, unknown>,
  pattern: RegExp,
) => string;

export default replacePlaceholders;