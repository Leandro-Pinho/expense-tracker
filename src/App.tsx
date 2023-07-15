import React, { useEffect, useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item'
import { Category } from './types/Category';
import { items } from './data/items';
import { categories } from './data/categories';
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';

function App() {
  // list
  const [list, setList] = useState(items);
  // filter list
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  // mês atual
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth]);


  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* Area de informações */}

        {/* Area de inserção */}

        {/* tabela de itens */}
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
}

export default App;
