import {BaseModel} from "../../../core/base-model";
import {UserRole} from "../value-objects/user-role";

interface IUserAuthProps
{
    id: number;
    name: string;
    email: string;
    photo: string | null;
    role: UserRole;
}

export class UserModel extends BaseModel
{
    public name: string;
    public email: string;
    public role: UserRole;
    public photo: string | null;

    constructor(props: IUserAuthProps)
    {
        super(props.id);

        this.name = props.name;
        this.photo = props.photo;
        this.email = props.email;
        this.role = props.role;
    }
}
