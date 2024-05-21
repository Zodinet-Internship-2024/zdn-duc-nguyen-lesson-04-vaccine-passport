import client from "./client";

export const getAllProvince = async () => {
  try {
    const { data } = await client.get(`/api/province`, {
      headers: {
        Accept: "application/json",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const getAllDistricts = async (province_id) => {
  try {
    const { data } = await client.get(`/api/province/district/${province_id}`, {
      headers: {
        Accept: "application/json",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getAllWards = async (district_id) => {
  try {
    const { data } = await client.get(`/api/province/ward/${district_id}`, {
      headers: {
        Accept: "application/json",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
