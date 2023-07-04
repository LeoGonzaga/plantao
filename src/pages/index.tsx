import Head from "next/head";
import Home from "@/screens/Home";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Plantão</title>
        <meta
          name="description"
          content="Nosso site é o destino definitivo para você encontrar informações atualizadas sobre os plantões de farmácias nos fins de semana. Estamos aqui para garantir que você nunca fique sem acesso aos serviços farmacêuticos essenciais quando mais precisa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </>
  );
}
