const Address = () => {
  const addressContent = [
    {
      id: 1,
      iconImg: "img/address/phone.png",
      name: "Telefono",
      info: (
        <>
          <li>
            <a href="Tel: +681 680 641"></a>
          </li>
          <li>
          <a href="Tel: +681 680 641">+681 680 641</a>
          </li>
        </>
      ),
      animDelay: "0",
    },
    {
      id: 2,
      iconImg: "img/address/email.png",
      name: "Email",
      info: (
        <>
          <li>
            <a href="mailto:juanfranciscoaguilarsanchez@gmail.com">JuanFran@gmail.com</a>
          </li>
          <li>
            <a href="mailto:jagusan2108@gmail.com">soporte@soporte.com</a>
          </li>
        </>
      ),
      animDelay: "100",
    },
    {
      id: 3,
      iconImg: "img/address/location.png",
      name: "Dirección",
      info: (
        <>
          <li>
            <p>
              Fernán Núñez,
              <br />
              14520, Córdoba.
            </p>
          </li>
        </>
      ),
      animDelay: "200",
    },
  ];

  return (
    <ul className="wrapper">
      {addressContent.map((item) => (
        <li
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay={item.animDelay}
          key={item.id}
        >
          <div className="list_inner">
            <div className="icon">
              <img src={item.iconImg} alt="icon" />
            </div>
            {/* End icon */}
            <div className="content">
              <h3>{item.name}</h3>
              <ul>{item.info}</ul>
            </div>
            {/* End .content */}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Address;
