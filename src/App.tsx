import React, { useEffect, useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item'
import { items } from './data/items';
import { categories } from './data/categories';
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';

function App() {
  // list
  const [list, setList] = useState(items);
  // filter list
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  // mês atual
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  // despesas
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);


  // monitorar a alteração da lista
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth]);

  // monitora a o mes para trazer o total do balanço do mês
  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);

  }, [filteredList])

  // para mudar o mês
  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* Area de informações */}
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        {/* Area de inserção */}
        <InputArea onAdd={handleAddItem} />

        {/* tabela de itens */}
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
}

export default App;
