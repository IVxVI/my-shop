export const calcPrice = (data, setPrice) => {
    if (data.length === 0) {
      setPrice(0);
    }

    const currentPrice = data.reduce(
      (
        acc: number, 
        curr: { price: string | number; qty: number; }
      ) => {
      return acc + +curr.price * curr.qty;
    }, 0);

    setPrice(currentPrice);
}