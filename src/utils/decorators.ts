import {
  ApiBearerAuth,
  ApiConsumes,
  ApiExtension,
  ApiHeader,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiSecurity,
  ApiProperty,
  ApiTags,
  ApiExtraModels,
  ApiOkResponse,
  getSchemaPath,
} from '@nestjs/swagger'
import { Type, applyDecorators } from "@nestjs/common";
import { PaginatedDto } from "../registered-status/dto/paginated.dto";

export const ApiPaginatedResponse = <TModel extends Type<any>>(
  model: TModel,
) => {
  return applyDecorators(
    ApiExtraModels(PaginatedDto, model),
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(PaginatedDto) },
          {
            properties: {
              results: {
                type: 'array',
                items: { $ref: getSchemaPath(model) },
              },
            },
          },
        ],
      },
    }),
  );
};

