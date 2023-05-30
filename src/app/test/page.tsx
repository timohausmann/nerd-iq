async function getData() {
    const num = Math.floor(Math.random()*100);
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${num}`, 
        { cache: 'no-store' }
    );
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
   
    return res.json();
  }

export default async function Test() {

    const data = await getData();

    return (
        <div>
            <h4>Test Route</h4>
            
            <div>{data.id}</div>
            <h3>{data.title}</h3>
            <div>{data.body}</div>
        </div>
    )
}
