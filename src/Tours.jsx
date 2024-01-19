import Tour from "./Tour";

const Tours = ({ tours, removeTours }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          const { id, image, info, price, name } = tour;
          return <Tour key={id} {...tour} removeTours={removeTours} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
