#!/bin/sh

while getopts u:p:d: flag
do
    case "${flag}" in
        u) userName=${OPTARG};;
        p) passWord=${OPTARG};;
        d) dbName=${OPTARG};;
    esac
done

[ -z "$userName" ] && echo "Username (-u) required... Exiting" && exit 1;
[ -z "$passWord" ] && echo "Password (-p) required... Exiting"&& exit 1;
[ -z "$dbName" ] && echo "Database Name (-d) required... Exiting"&& exit 1;

MYSQL_CONN="-u '${userName}' -p'$passWord'"
SQLSTMT="SELECT COUNT(1) FROM mysql.proc"
PROCCOUNT=`mysql ${MYSQL_CONN} -ANe"${SQLSTMT}" | awk '{print $1}'`
if [ ${PROCCOUNT} -eq 0 ] ; then exit ; fi
SPLIST=""
for DBSP in `mysql ${MYSQL_CONN} -ANe"SELECT CONCAT(type,'@',db,'.',name) FROM mysql.proc WHERE db = '${dbName}'"`
do
    SPLIST="${SPLIST} ${DBSP}"
done
for TYPEDBSP in `echo "${SPLIST}"`
do
    DB=`echo "${TYPEDBSP}" | sed 's/@/ /' | sed 's/\./ /' | awk '{print $2}'`
    SP=`echo "${TYPEDBSP}" | sed 's/@/ /' | sed 's/\./ /' | awk '{print $3}'`
    SQLSTMT=`echo "SHOW CREATE ${TYPEDBSP}\G" | sed 's/@/ /'`
    SPFILE=${DB}_${SP}.sql
    SPTEMP=${DB}_${SP}.tmp
    echo Echoing ${SQLSTMT} into ${SPFILE}
    mysql ${MYSQL_CONN} -ANe"${SQLSTMT}" > ${SPFILE}
    #
    # Remove Top 3 Lines
    #
    LINECOUNT=`wc -l < ${SPFILE}`
    (( LINECOUNT -= 3 ))
    tail -${LINECOUNT} < ${SPFILE} > ${SPTEMP}
    #
    # Remove Bottom 3 Lines
    #
    LINECOUNT=`wc -l < ${SPTEMP}`
    (( LINECOUNT -= 3 ))
    head -${LINECOUNT} < ${SPTEMP} > ${SPFILE}
    rm -f ${SPTEMP}
done
ls -l