import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div className="logo-container">
      <main>
        <div className="grid">
          <Link href="/" passHref className="card">
            <a className="card">
            <Image
                src="/images/logo.jpg"
                alt="logo"
                width={640}
                height={897}
              />
            </a>
          </Link>
        </div>
      </main>
      <style jsx>{`
        .logo-container {
          background-color: #91ef00;
          min-height: 10vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding-top: 0rem;
          margin-top: 0rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 3rem;
        }
        .card {
          margin: 1rem;
          flex-basis: 60%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;

        }
        .card:hover,
        .card:focus,
        .card:active {
          color: #fff;
          border-color: #ffffff;
        }
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
export default Logo;