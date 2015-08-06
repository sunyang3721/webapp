<?php
require_once('connect.php');

$last = $_POST['last'];
$amount = $_POST['amount'];

$user = array('demo1','demo2','demo3','demo3','demo4');
$query=mysql_query("select * from tjd_news order by id desc limit $last,$amount");
while ($row=mysql_fetch_array($query)) {
	$sayList[] = array(
		'content'=>$row['title'],
		'author'=>$row['yourname'],
		'date'=>$row['last_time']
      );
}
echo json_encode($sayList);
?>