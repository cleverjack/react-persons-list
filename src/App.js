import React, { useEffect, useState } from 'react';
import './style.css';
import { getPersonsJson, getPersonsXml } from './ApiService.js';
import { xmlToJson } from './helper.js';

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPersonsJson().then((res) => {
      getPersonsXml().then((res1) => {
        const persons1 = xmlToJson().parse(res1);
        let persons = [...persons1.persons.person, ...res.person];

        persons.sort((a, b) => a.id - b.id);
        setData(persons);
      });
    });
  }, []);

  return (
    <div>
      <h1>Persons!</h1>
      <p>Start editing to see some magic happen :)</p>
      <div>
        {data.map((it) => (
          <div>
            <h2>
              {it.id}: {it.firstName + ' ' + it.lastName}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
