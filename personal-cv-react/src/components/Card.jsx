function Card({ title, children }) {
    return (
        <section id="About_Me" className="card">
            <h2>{title}</h2>
            {children}
        </section>
    );
}
export default Card;
    