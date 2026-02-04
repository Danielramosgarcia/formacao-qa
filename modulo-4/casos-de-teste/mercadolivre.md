### Teste Positivo – Busca por “notebook”

| Passo | Ação | Resultado Esperado | Status | Resultado Encontrado |
|------|------|-------------------|--------|----------------------|
| 1 | Buscar por “notebook” | Resultados relevantes são exibidos | Passou | Produtos relacionados |
| 2 | Validar os resultados | Produtos condizem com a busca | Passou | Conforme esperado |
| 3 | Aplicar filtros de marca e preço | Lista é atualizada corretamente | Passou | Filtros funcionaram |
| 4 | Ordenar por “Menor preço” | Produtos ordenados corretamente | Passou | Ordem correta |

### Teste Negativo – Busca por “abcd1234”

| Passo | Ação | Resultado Esperado | Status | Resultado Encontrado |
|------|------|-------------------|--------|----------------------|
| 1 | Buscar algo inexistente (“abcd1234”) | Mensagem informando que não há resultados | Passou | Mensagem exibida |
