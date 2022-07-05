async function findUserById(id) {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      setTimeout(() => resolve(users[id]), 1000);
    }else{
      setTimeout(() => reject('No user with this id'), 1000);}
  });

  // async function rockBand ( string ) {
  //   return new Promise ( ( resolve, reject ) => {
  //     if ( string === 'Linkin Park' ) {
  //       resolve ( 'Chester, we miss you!' );
  //     } else {
  //       reject ( 'No matter the band we miss him anyway!' );
  //     }
  //   } );
  // }

}

function handleResult(number) {
  const resultOfThePromise = findUserById(number);
  console.log(resultOfThePromise);
}