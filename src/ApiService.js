const jsonData = {
  person: [
    {
      id: 10,
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      id: 5,
      firstName: 'Jack',
      lastName: 'Doe',
    },
    {
      id: 7,
      firstName: 'James',
      lastName: 'Doe',
    },
  ],
};

const xmlData = `
<persons>
<person>
<id>3</id>
<firstName>Jen</firstName>
<lastName>Doe</lastName>
</person>
<person>
<id>6</id>
<firstName>Stephanie</firstName>
<lastName>Joe</lastName>
</person>
<person>
<id>1</id>
<firstName>Victoria</firstName>
<lastName>Doe</lastName>
</person>
</persons>
`;

export const getPersonsJson = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(jsonData);
      return;
    }, 5000);
  });
};

export const getPersonsXml = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(xmlData);
      return;
    }, 10000);
  });
};
