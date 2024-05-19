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
  ApiTags
} from '@nestjs/swagger'

export class LoginDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string
}
