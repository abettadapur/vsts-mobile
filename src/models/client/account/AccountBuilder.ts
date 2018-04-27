import { IVssAccountResource } from '../../resources/account/AccountResource';
import { VssAccount } from './Account';

export function fromVssAccountResource(resource: IVssAccountResource): VssAccount {
    return new VssAccount(resource.id, resource.name);
}