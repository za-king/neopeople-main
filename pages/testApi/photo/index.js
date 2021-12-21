import Image from 'next/image'

export async function getServerSideProps() {
    const getphotos = await fetch(`https://jsonplaceholder.typicode.com/photos`);
    const photos = await getphotos.json();
    return {
      props: { photos},
    };
  }
  


export default function photo({photos}) {
    console.log(photos)
    return (
        <div>
            {photos.map((photo)=>{
                return(
                    <div key={photo.id}>
                        <h1>{photo.albumId}</h1>
                        <p>{photo.title}</p>
                        <img 
                        src={photo.url} 
                        alt='photo' 
                        width={100} 
                        height={100} />
                    </div>
                )
            })}
        </div>
    )
}

