// це оголошення компонента. Компонент - це функція. Зараз він не отримує props (властивість), а просто повертає розмітку. Але може отримувати.
const Product = ({
  name,
  imgUrl = '<https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder>',
  price,
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} width="640" />
      <p>Price: {price} credits</p>
    </div>
  );
};

export default Product;
