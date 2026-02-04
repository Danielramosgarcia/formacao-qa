| Passo | Ação                                 | Resultado Esperado                 | Status | Resultado Encontrado  |
| ----- | ------------------------------------ | ---------------------------------- | ------ | --------------------- |
|  TESTE POSITIVO                                                                                                    |
| ----- | ------------------------------------ | ---------------------------------- | ------ | --------------------- |
| 1     | Buscar por “notebook”                | Resultados relevantes são exibidos | Passou | Produtos relacionados |
| 2     | Validar os resultados                | Produtos condizem com a busca      | Passou | Conforme esperado     |
| 3     | Aplicar filtros de marca e preço     | Lista é atualizada corretamente    | Passou | Filtros funcionaram   |
| 4     | Ordenar por “Menor preço”            | Produtos ordenados corretamente    | Passou | Ordem correta         |
| ----- | ------------------------------------ | ---------------------------------- | ------ | --------------------- |
|  TESTE NEGATIVO                                                                                                    |
| ----- | ------------------------------------ | ---------------------------------- | ------ | --------------------- |
| 1     | Buscar algo inexistente (“abcd1234”) | Resultados aleatórios são exibidos | Passou | Produtos aleatórios   |
