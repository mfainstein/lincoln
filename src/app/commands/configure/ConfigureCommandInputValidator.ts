/* tslint:disable */
// generated by typescript-json-validator
import {inspect} from 'util';
import Ajv = require('ajv');
// @ts-ignore
import ConfigureCommandInput from './ConfigureCommandInput';
export const ajv = new Ajv({"allErrors":true,"coerceTypes":false,"format":"fast","nullable":true,"unicode":true,"uniqueItems":true,"useDefaults":true});

ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));

export {ConfigureCommandInput};
export const ConfigureCommandInputSchema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "defaultProperties": [
  ],
  "definitions": {
    "Reader": {
      "defaultProperties": [
      ],
      "properties": {
        "email": {
          "pattern": "\\S+@\\S+\\.\\S+",
          "type": "string"
        },
        "firstName": {
          "minLength": 1,
          "type": "string"
        },
        "interests": {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "lastName": {
          "minLength": 1,
          "type": "string"
        },
        "multiReader": {
          "type": "boolean"
        },
        "preferredMedium": {
          "enum": [
            0,
            1,
            2
          ],
          "type": "number"
        },
        "speed": {
          "$ref": "#/definitions/ReadingSpeed"
        }
      },
      "required": [
        "email",
        "firstName",
        "lastName"
      ],
      "type": "object"
    },
    "ReadingSpeed": {
      "defaultProperties": [
      ],
      "properties": {
        "section": {
          "$ref": "#/definitions/Section"
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit"
        }
      },
      "required": [
        "section",
        "timeUnit"
      ],
      "type": "object"
    },
    "Section": {
      "enum": [
        0,
        1,
        2
      ],
      "type": "number"
    },
    "TimeUnit": {
      "enum": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ],
      "type": "number"
    }
  },
  "properties": {
    "reader": {
      "$ref": "#/definitions/Reader"
    }
  },
  "required": [
    "reader"
  ],
  "type": "object"
};
export type ValidateFunction<T> = ((data: unknown) => data is T) & Pick<Ajv.ValidateFunction, 'errors'>
export const isConfigureCommandInput = ajv.compile(ConfigureCommandInputSchema) as ValidateFunction<ConfigureCommandInput>;
export default function validate(value: unknown): ConfigureCommandInput {
  if (isConfigureCommandInput(value)) {
    return value;
  } else {
    throw new Error(
      ajv.errorsText(isConfigureCommandInput.errors!.filter((e: any) => e.keyword !== 'if'), {dataVar: 'ConfigureCommandInput'}) +
      '\n\n' +
      inspect(value),
    );
  }
}
