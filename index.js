const { createClient } = require('@supabase/supabase-js')

const supabase = createClient('https://zaaodqohudnfzxjwbigi.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphYW9kcW9odWRuZnp4andiaWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5MjU0MTAsImV4cCI6MjA0NzUwMTQxMH0.OJMPYhKVQhfdhaHIjEzY5MSIPEGGQsr3hcrcZhrNPr0')

const express = require('express')
const color = require('colorette')

const app = express()
const port = 3000

app.get('/clients', async (req, res) => {

  const { data, error } = await supabase
  .from('clients')
  .select()

  res.json(data)
})

app.post('/students', (req, res) => {
  res.send('Добавление студентов')
})

app.delete('/students/:id', async (req, res) => {

  const response = await supabase
  .from('students')
  .delete()
  .eq('id', req.params.id)

  res.json('Студент с id = ' + req.params.id + 'удален!')
})

app.put('/students', (req, res) => {
  res.send('Изменение студента')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})