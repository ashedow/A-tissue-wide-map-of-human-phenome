import { action } from 'alfa'

export const addTissue = action(
  function({ id, meaning, tissuelist }) {
    var resultTodos

    if (!meaning) {
      resultTodos = tissuelist
    } else {
      resultTodos = tissuelist.concat([
        {
          id: id,
          meaning: meaning,
        }
      ])
    }

    return {
      tissuelist: resultTodos
    }
  },
  ['id', 'meaning', 'tissuelist'],
  'tissuelist'
)

export const deleteTissue = action(
  function({ set, id, tissuelist }) {
    var resultTodos = tissuelist.filter(function(todo) {
      return id !== todo.id
    })

    // Simulate an async operation.
    setTimeout(function() {
      set({
        tissuelist: resultTodos
      })
    }, 100)
  },
  ['id', 'tissuelist'],
  'tissuelist'
)
