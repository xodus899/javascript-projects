    const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
        console.log("hello"); //logs to console
    // Interpolated
        console.log('Hello I am a %s string!', '=D'); // will take the second value and put it in the %s replacement;

    // Styled
        console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow:10px 10px 0 blue;'); // %c is used to style ..

    // warning!
        console.warn('oh no'); // will warn where stack is traced..

    // Error :|
        console.error("will display an error in console and stack trace");

    // Info
        console.info("will give you the information sign in console");

    // Testing
        console.assert(1 === 2, "that is wrong"); // will only run if something is wrong.

    // clearing
        console.clear(); // will clear the console

    // counting
        console.count("Wes"); // count how many times it has counted at that time.

    // timing
        console.time('fetching data');
        fetch('https://api.github.com/users/grafluxe')
          .then(data => data.json())
          .then(data => {
            console.timeEnd('fetching data')
            console.log(data);
          });

    // table
      console.table(dogs); // will display the data in a table..

  