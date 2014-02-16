" Vim syntax file
" Language: Thurston

syn keyword thurstonCommentTodo     TODO FIXME XXX TBD contained
syn match   thurstonComment         "#.*" contains=@Spell,thurstonCommentTodo
syn keyword thurstonConditional     if then else fi
syn keyword thurstonRepeat          for in while do done
syn keyword thurstonBranch		      break continue
syn keyword thurstonOperator		    new delete instanceof typeof
syn region  thurstonStringD         start=+"+  skip=+\\\\\|\\"+  end=+"\|$+
syn region  thurstonStringS         start=+'+  skip=+\\\\\|\\'+  end=+'\|$+
syn region  thurstonRegexpString    start=+/[^/]*+me=e-1 skip=+\\\\\|\\/+ end=+/[gim]\{0,2\}\s*$+ end=+/[gim]\{0,2\}\s*[;.,)\]}]+me=e-1 oneline
syn keyword thurstonException	      try catch finally yrt throw
syn region  thurstonFunction        matchgroup=thurstonFunctionParens start="(\_[^()]*){" end="}" contains=ALL
syn region  thurstonObject          start="{" end="}" transparent

hi def link thurstonComment         Comment
hi def link thurstonCommentTodo     Todo
hi def link thurstonConditional     Conditional
hi def link thurstonRepeat          Repeat
hi def link thurstonBranch          Conditional
hi def link thurstonOperator        Operator
hi def link thurstonStringD         String
hi def link thurstonStringS         String
hi def link thurstonRegexpString    String
hi def link thurstonException       Exception
hi def link thurstonFunctionParens  Function
