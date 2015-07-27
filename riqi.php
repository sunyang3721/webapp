<?php
/*
$da=time();
echo $da.'<br/>';
echo date('Y-m-d',$da);
echo '<br/>';
echo strtotime("2014-11-21");
$now = strtotime("2014-11-21");
echo '<br/>'.date('Y-m-d',$now);
echo '<br/>'.date('Y-m-d',strtotime("+1 day")) ;
*/
/*
class A {
public $name; //声明对象
function __construct($name){ //构造函数
 echo $name;
}

}//父类

class B extends A{//集成
function __construct($name){
 echo '子类输出'.$name;
}
}//子类
$b = new B('你好');//输出结果
*/
/*
class Person{
	private $name = 'sunyang';
	private function ss(){
		return $this->name;
	}
	public function sunyang(){
		return $this->ss();
	}
	public function __toString(){
			$s = 'sfdsfdsfsdfs';
		return $s;
	}
		}
$p = new Person();
   echo $p->sunyang();
   echo $p;
*/
/*
abstract class BaseShop
{
		abstract function sunyang();
		abstract function yang();
public  function buy($gid)
{
echo('你购买了ID为 :'.$gid.'的商品');
}
public  function sell($gid)
{
echo('你卖了ID为 :'.$gid.'的商品');
}
public  function view($gid)
{
echo('你查看了ID为 :'.$gid.'的商品');
}
}
class BallShop extends BaseShop
{
var $itme_id = null;
public function __construct()
{
$this->itme_id = 2314;
}
public function open()
	{
	$this->sell($this->itme_id);
	$this->buy($this->itme_id);
	$this->view($this->itme_id);
	}
	function sunyang(){
		echo '卧槽';
	}
	function yang(){
		$this->sunyang();
	}
}
$p = new BallShop();
echo $p->open();
$p->yang();
*/
/*
abstract class A {
	public function sun(){
		echo 'sun';
	}
	public function yang(){
		echo 'yang';
	}
	abstract function ceshi();
}
class B extends A {
   public function index(){
       self::sun();
	   parent::sun();

   }
   public function sun(){
		echo 'sunyabng';
   }
   public function ceshi(){
		return parent::sun();
   }
}
//B::index();
B::sun();
echo '<br/>';
B::ceshi();
*/
class A{
	public static $yulei = 'yuulek';
	function __toString(){
		return 'yuleishabi';
	}
	public function sunyang(){
		return 'hahahah';
	}
	public function ba($name='0'){
		//return $name;
		return self::sunyang().$name;
	}
	public function ma(){
		$ba = self::$yulei;
		return $ba;
	}
}
//$p = new A();
//echo  $p->ba();
//echo A::ba('sdfds');
//echo A::ma();
class B extends A {
   public function index(){
        return parent::$yulei;
   }
}
echo B::index();

?>