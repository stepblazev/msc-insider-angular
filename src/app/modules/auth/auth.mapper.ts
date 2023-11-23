import {Injectable} from "@angular/core";
import {IRegisterPayloadDTO, IRegisterRequestDTO} from "./dto/register.dto";

@Injectable()
export class AuthMapper {
  public registerPayloadToRequest(data: IRegisterPayloadDTO): IRegisterRequestDTO {
    return {
      name: data.fio,
      email: data.email,
      password: data.password,
    }
  }
}
