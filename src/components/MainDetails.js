export default function MainDetails() {
  const name = "Pankaj";
  const address = "129, Green land Nagar, Vadavalli, Edayarpalayam,<br />Coimbatore-25, Tamil Nadu";

  return (
    <>
      <section className="flex flex-col items-end justify-end">
        <h2 className="font-bold text-3xl uppercase mb-1">{name}</h2>
        <p dangerouslySetInnerHTML={{ __html: address }}></p>
      </section>
    </>
  );
}