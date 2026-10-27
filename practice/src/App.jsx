import React from "react";
import Card from "./components/card/Card";
import Button from "./components/button/Button";

const App = () => {
  return (
    <>
      <div className="main">
        <Card
          user="Ankur"
          age={26}
          img="https://images.unsplash.com/photo-1782171059800-52b324c6ca3b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        />
        <Card
          user="Ankit"
          age={25}
          img="https://images.unsplash.com/photo-1667843623361-1fdecf19637f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        />
        <Card
          user="Arpit"
          age={21}
          img="https://images.unsplash.com/photo-1667843624035-4da1004eb9c3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        />
        <Card
          user="kajal"
          age={26}
          img="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        />
        <Card
          user="Manisha"
          age={30}
          img="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        />
        <Card
          user="Shailesh"
          age={32}
          img="https://plus.unsplash.com/premium_photo-1672774465573-2e94fce26449?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        />
      </div>
      <Button/>
    </>
  );
};

export default App;
