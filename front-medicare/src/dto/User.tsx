export interface UserDTO {
  account: string;
  subscription: boolean;
  subscriptionDate: string;
  roleName: string;
}

export const UserTransformer: (item: any) => UserDTO | undefined = (
  item: any
) => {
  const properties = item.properties;
  if (
    properties &&
    typeof properties.account === "string" &&
    typeof properties.subscription === "boolean" &&
    typeof properties.subscriptionDate === "string" &&
    typeof properties.roleName === "string"
  ) {
    return {
      account: properties.account,
      subscription: properties.subscription,
      subscriptionDate: properties.subscription,
      roleName: properties.roleName,
    };
  }
  return undefined;
};
