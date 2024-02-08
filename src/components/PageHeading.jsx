import "./PageHeading.css";

const PageHeading = (props) => {
  return (
    <section className="mt-12">
      <div className="p-12 page-heading">
        <div>
          <h1 className="text-4xl text-mainblue text-center">
            {props.children}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default PageHeading;
