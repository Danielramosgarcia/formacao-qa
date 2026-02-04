### Teste Positivo – Busca por “notebook”

| Passo | Ação | Resultado Esperado | Status | Resultado Encontrado | evidencia |
|------|------|-------------------|--------|----------------------|
| 1 | Buscar por “notebook” | exibir o texto “notebook” e realizar a pesquisa | Passou | conforme esperado |
| 2 | Validar os resultados | Produtos condizem com a busca | Passou | Conforme esperado |
| 3 | Aplicar filtros de marca e preço | Lista é atualizada corretamente | Passou | Filtros funcionaram |
| 4 | Ordenar por “Menor preço” | Produtos ordenados do menor preço para maior | Passou | Ordem decrescente |
![Busca por notebook no Mercado Livre](evidencias/mercadolivre/busca-notebook.png)
![Filtro de preço aplicado](evidencias/mercadolivre/filtro-preco.png)





### Teste Negativo – Busca por “abcd1234”

| Passo | Ação | Resultado Esperado | Status | Resultado Encontrado |
|------|------|-------------------|--------|----------------------|
| 1 | Buscar algo inexistente (“abcd1234”) | Produtos aleatórios | Passou | Produtos aleatórios |
