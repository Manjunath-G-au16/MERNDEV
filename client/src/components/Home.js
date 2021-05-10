import React, { useEffect, useState } from "react";

const Home = () => {
  const [userNameData, setUserNameData] = useState("");
  const [show, setShow] = useState(false);
  const userName = async () => {
    try {
      const res = await fetch("/userdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setUserNameData(data.name);
      setShow(true);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    userName();
  }, []);
  return (
    <div>
      <br />
      <br />
      <br />
      <h1>Welcome,</h1>
      <h1>console.log("{userNameData}");</h1>
      <h2>
        {show ?   "You are onBoard() ,${Developer}" : "We are ${Developers}"}
      </h2><br />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
        corporis obcaecati, hic aspernatur totam quos temporibus quia eum
        recusandae odit. Odit exercitationem aspernatur nihil necessitatibus,
        veritatis nulla tempore laborum illo, aperiam ullam cumque ipsum amet
        quasi? Nobis saepe repellat facilis, qui magni at, rerum non doloremque
        asperiores, repudiandae consectetur error itaque consequuntur pariatur.
        Provident suscipit obcaecati cum, ut voluptas odit impedit? Perspiciatis
        ut fugiat, accusamus excepturi blanditiis totam? Exercitationem libero
        nulla excepturi. Incidunt modi repudiandae ullam dolor officiis earum
        alias quis, molestias, consequuntur ea ad dolorem maiores, corporis ipsa
        nam omnis molestiae iusto aliquam distinctio quos voluptatum culpa
        ducimus quae placeat. Voluptates laboriosam ex ullam necessitatibus
        autem veniam rerum odit, ipsa eligendi numquam voluptatum dolorem enim,
        ipsum fuga ad facere sit animi id vero voluptate obcaecati sapiente
        ducimus! Asperiores velit temporibus totam quia laborum iusto optio vero
        perferendis praesentium quas sit iure quam harum numquam aliquid
        excepturi, illum aspernatur unde dolor ducimus cumque porro vel aliquam.
        Labore quia ipsam laborum doloribus voluptatibus. Deserunt culpa placeat
        architecto ipsum commodi facilis debitis delectus, nihil sunt similique
        harum asperiores minus, ullam quam omnis libero eaque distinctio, id
        possimus doloremque accusantium voluptates et temporibus! Id dolores
        beatae iusto blanditiis eum harum! Aperiam suscipit magnam libero ex
        illo, eligendi nisi eveniet vero culpa sint dolores. Aliquam, quas
        dignissimos ipsa eaque laudantium blanditiis porro enim optio rem, ad
        provident dicta mollitia odit nulla dolore perferendis earum, vitae
        explicabo officia magnam maxime amet labore cupiditate unde! Nisi
        facilis cupiditate quisquam quam itaque. Fuga omnis quis dolorem aperiam
        laudantium odio id necessitatibus voluptates. Reprehenderit aspernatur
        voluptas cumque similique nostrum dignissimos voluptates aliquam, omnis
        reiciendis quo porro voluptatibus ratione incidunt harum. Fugiat magni
        repellat reprehenderit quo fugit excepturi consequuntur perspiciatis
        delectus quae ut, explicabo fuga iste ea error quisquam quas ullam harum
        nobis autem laudantium itaque, dolores, labore quos? Facere, eaque et?
        Vitae culpa accusantium laboriosam voluptatem fugit mollitia, recusandae
        labore cumque eaque beatae similique officia nesciunt fuga unde impedit!
        Libero error illum harum? Vel in quidem ea sunt distinctio! Facilis
        voluptatum unde dolore voluptatem doloribus accusantium adipisci
        sapiente autem fugiat temporibus eius, ipsam quisquam quod, magni soluta
        eos. Veniam iure quidem quibusdam ducimus iusto exercitationem quas esse
        voluptatibus iste nulla velit modi eaque porro vitae quod tenetur vero,
        facilis officia! Inventore aspernatur quasi placeat reiciendis minima
        quod excepturi ipsam repellat laborum quibusdam sed, iste sequi sunt
        officia distinctio. Odio autem praesentium laboriosam architecto
        assumenda molestiae tempora iusto debitis cumque eum! Sint dolore ipsam
        molestiae expedita maxime explicabo dolorum laudantium nulla quos
        reprehenderit! Sed at reprehenderit cumque assumenda libero? Consequatur
        ullam aspernatur totam, odio omnis nesciunt? Alias sint architecto
        officiis explicabo? Vitae numquam cupiditate veritatis, dolor rem
        obcaecati minima labore dolores asperiores tempora est iusto
        reprehenderit optio explicabo laboriosam quae laborum, dolorum excepturi
        aspernatur? Magnam, illo inventore aliquid alias eius praesentium
        necessitatibus, repellat eligendi nobis, perferendis totam placeat
        obcaecati nam sit quibusdam. Fugiat similique eaque, maxime distinctio
        ducimus consequatur earum illo officia animi et voluptatum suscipit est
        perferendis quasi alias ipsum, repudiandae eligendi necessitatibus
        molestiae magni fugit voluptas soluta id? Ratione eius, at, earum
        deleniti necessitatibus quod similique dolorem iste commodi quia fugit
        dolorum facilis reprehenderit praesentium non aperiam molestiae aut
        laudantium voluptatibus atque. Quam nihil distinctio nisi pariatur
        ducimus, a, qui enim neque aut veniam illum quasi dolorum laboriosam
        perspiciatis iure nesciunt autem deleniti similique omnis dolore
        quisquam explicabo, minima natus praesentium. Aperiam vero nesciunt
        consequuntur laudantium perferendis sed, debitis culpa nemo qui corrupti
        accusantium eaque ipsum quia delectus, omnis asperiores ratione
        reprehenderit. Dolorum rerum deserunt molestias laboriosam accusamus?
        Labore possimus incidunt quaerat vel non reiciendis ratione earum dicta
        quibusdam impedit ab maiores aliquid enim, alias sed. Inventore sunt,
        est aliquam natus iusto quidem consequuntur voluptatem minima, dolor
        fuga ipsum deserunt fugiat libero iste dolorem doloribus blanditiis
        deleniti error odit hic! Perspiciatis, eaque unde, nihil ducimus,
        mollitia deleniti amet sequi rem sint est laboriosam ullam temporibus
        fugiat totam dolore velit odio molestias? Consequatur magni nobis
        ducimus, perspiciatis quasi ipsam est odio maiores sed provident
        reiciendis enim repellat eligendi cum quae labore totam quam molestiae,
        quaerat doloribus laborum cupiditate nemo deserunt. Sint consequatur
        dolorum fuga labore optio aliquam asperiores debitis, voluptas,
        reprehenderit quasi eveniet vel? Ratione nulla veniam incidunt excepturi
        explicabo sapiente officia quae labore corrupti, odit libero nostrum
        sint quod voluptas atque modi animi repellendus alias aut? Voluptate
        voluptatem hic voluptatum alias quia sequi, debitis quo facere, pariatur
        iure quaerat, odio laborum in cumque velit facilis officiis nihil
        corporis aliquam ex vitae. Dicta repudiandae ad atque officia,
        exercitationem laudantium accusamus, impedit at obcaecati placeat sit
        iusto, minus omnis ex perspiciatis. Fuga totam animi eum quo debitis
        architecto possimus porro iure nemo reprehenderit. Necessitatibus at
        illo tempora pariatur, enim nobis reprehenderit veritatis aut, saepe
        amet dolor quis eveniet quae earum aliquam ex molestiae deserunt
        corrupti, repellat vero tenetur? Explicabo excepturi voluptas earum
        itaque culpa repudiandae quaerat doloremque recusandae eos veniam. Eius
        dolore nesciunt aliquid dolorem doloremque, aspernatur mollitia
        distinctio laboriosam odio iure, placeat corrupti quia? Est in et
        ratione voluptatum distinctio dolores, maiores sed qui animi repellat.
        Amet molestias neque qui aspernatur aliquid provident sed dignissimos
        dicta harum quasi exercitationem ipsam, nisi eaque autem ut nesciunt
        dolorum suscipit explicabo molestiae atque delectus minus voluptatibus
        ex. Harum non ipsam odio quae vitae. Fugit fuga eligendi nesciunt non
        neque velit facilis at architecto doloribus numquam rem ipsam pariatur
        facere, deleniti modi quod labore adipisci. Beatae nobis et quibusdam
        facere illo ullam reiciendis eaque fugiat sapiente, exercitationem
        pariatur suscipit perferendis architecto accusamus provident cumque
        minima, sit ipsa in nisi excepturi amet. Eum officiis expedita quae
        atque voluptatum et, corporis ullam voluptatibus laboriosam nesciunt
        laborum dicta, ipsam autem, ab esse error! Maiores similique quos
        laboriosam exercitationem ipsam molestiae reiciendis mollitia incidunt,
        dolore, quisquam ullam fugit eaque tenetur. Rem deserunt dignissimos id
        minima? Commodi alias aliquid, culpa cumque voluptate corrupti in ipsam
        eveniet pariatur a totam aperiam quo vitae eum minus, ducimus rem
        quidem, sit asperiores! Ipsa, tenetur! Consequuntur sit deserunt laborum
        similique esse numquam, voluptate quaerat asperiores facere. Provident,
        architecto? Hic molestiae optio eligendi itaque doloribus quidem,
        facilis, recusandae praesentium quisquam corrupti quo!
      </p>
    </div>
  );
};

export default Home;