export const addCart = (product) => {
  console.log(product);
  const idProduct = new Date().getTime();
  return {
    type: "ADDITEM",
    payload: { ...product, idProduct: idProduct },
  };
};

export const updateCart = (payload) => {
  console.log(payload);
  return {
    type: "UPDATEITEM",
    payload: payload,
  };
};

export const delCart = (id) => {
  return {
    type: "DELITEM",
    payload: id,
  };
};
