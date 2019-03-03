file_names <- dir("C:/Users/polar/Documents/phenotypes")



setwd("C:/Users/polar/Documents/phenotypes")

rtab = data.frame()

for (f in file_names){
 tab =  read.csv(f, sep='\t')
 tab$id = gsub(".csv", "", f)
 rtab = rbind(rtab, tab)
}

#your_data_frame <- do.call(rbind,lapply(file_names, function(x) read.csv(x, sep='\t')))
#dim(your_data_frame)


tables = lapply(file_names, function(x) read.csv(x, sep='\t')
ydf = rbind(tables)                
                
 testt = rtab               
 testt$KS_coef = NULL
newframe = c()
for (i in 1:nrow(rtab)){
  r = as.character(rtab$X[i])
  minp = rtab$min_p_value[i]
  pv = rtab$p.value[i]
  id = rtab$id[i]
  count = grepl(";", r)
  count = as.numeric(count)
  if (count > 0){
    rowv = unlist(strsplit(r, ";"))
    lg = length(rowv)
    for (l in 1:lg){
      #newframe = rbind(newframe, c(rowv[l], pv, minp, id))
      ntab = c(rowv[l], pv, minp, id)
      nx = c()
      nx = rbind(nx, ntab)
      nx = as.data.frame(nx)
      colnames(nx) = c("X", "p.value", "min_p_value", "id")
      print(rowv[l])
      testt = rbind(testt, nx)
    }
  }
}

for (i in 1:nrow(testt)){
  chh = grepl(";", testt$X[i])
  if (count != 0){
  testt = testt[testt$X == testt$X[i],]
  }
}






your_data_frame
sapply(your_data_frame, function(x) sapply(x, function(y) strsplit(as.character(y), '\t')))
