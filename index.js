const { createClient } = require('@supabase/supabase-js')

const supabase = createClient('https://fjmitbmygewclwkmgttb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqbWl0Ym15Z2V3Y2x3a21ndHRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3NzY2ODEsImV4cCI6MjA2MDM1MjY4MX0.65Wy5XDp9WQWCSpKF7sB9Egd0BG-ehkb5tsww4c2WwA')

const express = require('express')
const color = require('colorette')

const app = express()
const port = 3000

app.get('/students', async (req, res) => {

  const { data, error } = await supabase
  .from('students')
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