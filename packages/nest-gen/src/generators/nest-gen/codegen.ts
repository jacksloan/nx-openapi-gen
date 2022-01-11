import { OpenAPIV3 } from 'openapi-types';

export function generate(
  options: { dryRun: boolean },
  doc: OpenAPIV3.Document
): void {
  const models = doc.components.schemas;
}
