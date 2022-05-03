//import 'flowbite';
import CardFormation from "../components/CardFormation";
import CardProject from "../components/CardProject";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Title from "../components/Title";
import { skills, education, proyectos } from "../data";
export default function Home() {
  return (
    <>
      <Layout page="Desarrollador web">
       <Header/>
       <section className="proyectos">
         <Title text="Mis proyectos"/>
         <CardProject/>
       </section>

       {/* <section className="formacion">
              <Title text="Formación Académica" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {education.map(
                  (
                    {
                      category,
                      title,
                      specialty,
                      date,
                      institution,
                      imagen,
                      documento,
                    },
                    i
                  ) => (
                    <CardFormation
                      key={i}
                      category={category}
                      title={title}
                      specialty={specialty}
                      date={date}
                      institution={institution}
                      imagen={imagen}
                      documento={documento}
                    />
                  )
                )}
              </div>
            </section> */}

      </Layout>
    </>
  );
}
