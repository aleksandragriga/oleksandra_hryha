const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
      {
        name: 'Клієнт 1',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків',
        partners: [
          {
            name: 'Клієнт 1.1',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
          },
          {
            name: 'Клієнт 1.2',
            type: 'subSubCompany',
            uses: 'Рішення для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
              {
                name: 'Клієнт 1.2.3',
                type: 'subSubCompany',
                uses: 'Рішення для продажу квитків',
                sells: 'Рішення для продажу квитків',
              }
            ]
          }
        ]
      },
      {
        name: 'Клієнт 2',
        type: 'subCompany',
        uses: 'ПО для продажу квитків',
        sells: 'Рішення для продажу квитків'
      }
    ]
  };
  
  function findValueByKey(companyName, Company = company) {
    if (Company.name === companyName) {
      return Company;
    }
  
    if (Company.clients) {
      for (const client of Company.clients) {
        const result = findValueByKey(companyName, client);
        if (result) {
          return result;
        }
      }
    }

    if (Company.partners) {
      for (const partner of Company.partners) {
        const result = findValueByKey(companyName, partner);
        if (result) {
          return result;
        }
      }
    }
  
    return null;
  }
  const result = findValueByKey('Клієнт 1.2');
  console.log(result);
  
  const result1 = findValueByKey('Клієнт 1.2.3');
  console.log(result1);