export default function () {
  // ~~~~~~~~~~~~~~~~ About Page - Writing Deleting Effect ~~~~~~~~~~~~~~~~

  //Specialities text
  const specialities = ['Tattoo Artist', 'Make Up Artist', 'Piercing Master'];

  //Getting the span element / Where the speciality is going to be displayed
  const specElem = document.getElementById('speciality');

  //Setting Speciality(span) content to '' empty string
  specElem.innerHTML = '';

  /* Paremeteres 
    letter  - Counts the length of the arrays that hold the letters of each word. Example : 'Tatto Artist'.length = 12
    word    - Counts the length of specialities array that holds the words that are going to be displayed - length = 3
    write   - When Write = 1 function Writer() writes and when write = 0 function Writer() erases
    time    - setTimeout's time handler so write is medium speed, erase is fast speed and hold is slower speed
  */
  let letter = 0,
    word = 0,
    write = 1,
    time = 150;

  let newArray;

  const writer = () => {
    if (write == 0 && letter == specialities[word].length) {
      //When the function completes the writing proccess, sets the time of next call to 2s so the user will have time to read the word
      time = 2000;
    } else if (write == 0 && letter < specialities[word].length) {
      //When the 2s period is over, time to erase the word gets shorter
      time = 50;
    } else {
      //Setting the time back to 150 and starts writing the next word
      time = 150;
    }

    setTimeout(() => {
      if (letter < specialities[word].length && write == 1) {
        /* While the letter counter < word's length and write == 1, each word of specialities array is splitted 
        to an array that holds each letter as an array element and the span element get's the next value of it every time 
        the function is called
        */
        specElem.innerHTML += specialities[word].split('')[letter];

        //Increasing letter counter -> getting the next letter of the word
        letter++;
        if (letter == specialities[word].length) {
          //if the letter counter gets to the word's length, write = 0 -> the erasing proccess begins
          write = 0;
        }
      } else if (write == 0 && letter >= 0) {
        //Erasing proccess - newArray gets the letters of span element
        newArray = [...specElem.innerHTML];

        //Since letter counter is at the maximum value (word's length), by using splice, each time the funcion is called
        //it get's and deletes the last element of the array on every callBack
        newArray.splice(letter, 1);

        //Setting the value of span equals to the newArray by character - as string (not array)
        specElem.innerHTML = newArray.join('');

        //Decreasing the letter counter in order to get the previues letter on every callback
        letter--;
      } else {
        //If all of the above is cimpleted write = 1 - Back to writing | word++ - getting the next word | letter = 0 - start from first letter
        write = 1;
        word++;
        letter = 0;
        if (word == specialities.length) {
          //Setting the word counter to 0 when it gets to the length value
          word = 0;
        }
      }

      //writer() function callBack
      writer();
    }, time);
  };

  //Writer() Function first Call
  writer();
}
