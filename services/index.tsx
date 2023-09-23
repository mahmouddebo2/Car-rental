import request, { gql } from "graphql-request";
const MasterUrl =
  "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clldztc6841zx01umdqjv9xok/master";

export const getCarsList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        publishedAt
        updatedAt
        seat
        image {
          url
        }
        carType
        carBrand
      }
    }
  `;
  const result = await request(MasterUrl, query);
  return result;
};

export const getStoreLocation = async () => {
  const query = gql`
    query storeLocation {
      storesLocations {
        address
      }
    }
  `;
  const result = await request(MasterUrl, query);
  return result;
};

export const createBooking = async (formValue:any) => {
  const mutationQuery = gql`
  mutation MyMutation{
    createBooking(
      data:
      {username:"${formValue.userName}",
      pickUpData:"${formValue.userName}"
      pichUpTime:'${formValue.userName}',
      dropOffData:'${formValue.userName}',
      dropOffTime:'${formValue.userName}',
      contactNumber:'${formValue.userName}',
      carId:{
        connect:{
          id: "clle0h8nx7f130alidjeevanb"
        }
      }
    }
    ){
      id
    }
  }`
  const result = await request(MasterUrl, mutationQuery);
  return result;
};
