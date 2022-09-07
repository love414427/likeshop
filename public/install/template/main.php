<?php !defined('install') && exit(); ?>

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>iunShop单商户安装</title>
        <link rel="stylesheet" type="text/css" href="https://www.layuicdn.com/layui/css/layui.css"/>
        <link rel="stylesheet" type="text/css" href="./css/mounted.css"/>
        <link rel="shortcut icon" href="./favicon.ico"/>
    </head>
    <body>
    <div class="header">
        <div class="logo" style="width: 220px;">
            <img src="./images/slogn.png?v=1"/>
        </div>
    </div>
    <div class="mounted" id="mounted">
        <div class="mounted-box">
            <form method="post" action="#" name="main_form">
                <div class="mounted-title">安装步骤</div>
                <div class="mounted-container" id="tab">
                    <ul class="mounted-nav" id="nav">
                        <li <?php if ($step == "1") { ?>class="active"<?php } ?>>许可协议</li>
                        <li <?php if ($step == "2") { ?>class="active"<?php } ?>>环境监测</li>
                        <li <?php if ($step == "3") { ?>class="active"<?php } ?>>参数配置</li>
                        <li <?php if ($step == "4" or $step == '5') { ?>class="active"<?php } ?>>安装</li>
                    </ul>

                    <!-- 阅读许可 -->
                    <?php if ($step == '1') { ?>
                        <div class="mounted-content-item show">
                            <div class="content-header">
                                
                            </div>

                            </div>
                        </div>
                    <?php } ?>

                    <!-- 检查信息 -->
                    <?php if ($step == '2') { ?>
                        <div class="mounted-content-item show">
                            <div class="mounted-env-container">
                                <div class="mounted-item">
                                    <div class="content-header">
                                        服务器信息
                                    </div>
                                    <div class="content-table">
                                        <table class="layui-table" lay-skin="line">
                                            <colgroup>
                                                <col width="210">
                                                <col width="730">
                                            </colgroup>
                                            <thead>
                                            <tr>
                                                <th>参数</th>
                                                <th>值</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>服务器操作系统</td>
                                                <td><?php echo PHP_OS ?></td>
                                            </tr>
                                            <tr>
                                                <td>web服务器环境</td>
                                                <td><?php echo $_SERVER['SERVER_SOFTWARE']; ?></td>
                                            </tr>
                                            <tr>
                                                <td>PHP版本</td>
                                                <td><?php echo @phpversion(); ?></td>
                                            </tr>
                                            <tr>
                                                <td>程序安装目录</td>
                                                <td><?php echo realpath(__DIR__ . '../../../'); ?></td>
                                            </tr>
                                            <tr>
                                                <td>磁盘空间</td>
                                                <td><?php echo $modelInstall->freeDiskSpace(realpath(__DIR__ . '../../../')) ?></td>
                                            </tr>
                                            <tr>
                                                <td>上传限制</td>
                                                <?php if (ini_get('file_uploads')): ?>
                                                    <td><?php echo ini_get('upload_max_filesize'); ?></td>
                                                <?php else: ?>
                                                    <td>禁止上传</td>
                                                <?php endif; ?>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="mounted-tips mt16">PHP环境要求必须满足下列所有条件，否则系统或系统部分功能将无法使用。</div>
                                <div class="mounted-item mt16">
                                    <div class="content-header">
                                        PHP环境要求
                                    </div>
                                    <div class="content-table">
                                        <table class="layui-table" lay-skin="line">
                                            <colgroup>
                                                <col width="210">
                                                <col width="210">
                                                <col width="120">
                                                <col width="400">
                                            </colgroup>
                                            <thead>
                                            <tr>
                                                <th>选项</th>
                                                <th>要求</th>
                                                <th>状态</th>
                                                <th>说明及帮助</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>PHP版本</td>
                                                <td>大于7.2</td>
                                                <?php echo $modelInstall->correctOrFail($modelInstall->checkPHP()) ?>
                                                <td>建议使用PHP7.2.4版本</td>
                                            </tr>
                                            <tr>
                                                <td>PDO_MYSQL</td>
                                                <td>支持 (强烈建议支持)</td>
                                                <?php echo $modelInstall->correctOrFail($modelInstall->checkPDOMySQL()) ?>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>allow_url_fopen</td>
                                                <td>支持 (建议支持cURL)</td>
                                                <?php echo $modelInstall->correctOrFail($modelInstall->checkCurl()) ?>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>GD2</td>
                                                <td>支持</td>
                                                <?php echo $modelInstall->correctOrFail($modelInstall->checkGd2()) ?>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>DOM</td>
                                                <td>支持</td>
                                                <?php echo $modelInstall->correctOrFail($modelInstall->checkDom()) ?>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>session.auto_start</td>
                                                <td>关闭</td>
                                                <?php echo $modelInstall->correctOrFail($modelInstall->checkSessionAutoStart()) ?>
                                                <td></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="mounted-tips mt16">
                                    系统要求安装目录下的runtime和upload必须可写，才能使用商城的所有功能。
                                </div>
                                <div class="mounted-item mt16">
                                    <div class="content-header">
                                        目录权限监测
                                    </div>
                                    <div class="content-table">
                                        <table class="layui-table" lay-skin="line">
                                            <colgroup>
                                                <col width="210">
                                                <col width="210">
                                                <col width="120">
                                                <col width="400">
                                            </colgroup>
                                            <thead>
                                            <tr>
                                                <th>目录</th>
                                                <th>要求</th>
                                                <th>状态</th>
                                                <th>说明及帮助</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>/runtime</td>
                                                <td>runtime目录可写</td>
                                                <?php echo $modelInstall->correctOrFail($modelInstall->checkDirWrite('runtime')) ?>
                                                <td><?php if($modelInstall->checkDirWrite('runtime') =='fail') echo'请给runtime目录权限，若目录不存在先新建';?></td>
                                            </tr>
                                            <tr>
                                                <td>/public/uploads</td>
                                                <td>uploads目录可写</td>
                                                <?php echo $modelInstall->correctOrFail($modelInstall->checkDirWrite('public/uploads')) ?>
                                                <td><?php if($modelInstall->checkDirWrite('public/uploads')=='fail') echo'请给public/uploads目录权限，若目录不存在先新建';?></td>
                                            </tr>
                                            <tr>
                                                <td>../config</td>
                                                <td>config目录可写</td>
                                                <?php echo $modelInstall->correctOrFail($modelInstall->checkDirWrite('config')) ?>
                                                <td><?php if($modelInstall->checkDirWrite('config')=='fail') echo'请给config目录权限，若目录不存在先新建';?></td>
                                            </tr>
                                            <tr>
                                                <td>../.env</td>
                                                <td>.env文件可写</td>
                                                <?php echo $modelInstall->correctOrFail($modelInstall->checkDirWrite('.env')) ?>
                                                <td><?php if($modelInstall->checkDirWrite('.env')=='fail') echo'请给.env文件权限，若文件不存在，注意文件名第1字符是" . "';?></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php } ?>

                    <!-- 数据库设置 -->
                    <?php if ($step == '3') { ?>
                        <div class="mounted-content-item show">
                            <div class="mounted-item">
                                <div class="content-header">
                                    数据库选项
                                </div>
                                <div class="content-form">

                                    <div class="form-box-item">
                                        <div class="form-desc">
                                            数据库主机
                                        </div>
                                        <div>
                                            <input type="text" name="host" value="<?= $post['host'] ?>"/>
                                        </div>
                                    </div>
                                    <div class="form-box-item">
                                        <div class="form-desc">
                                            端口号
                                        </div>
                                        <div>
                                            <input type="text" name="port" value="<?= $post['port'] ?>"/>
                                        </div>
                                    </div>
                                    <div class="form-box-item">
                                        <div class="form-desc">
                                            数据库用户
                                        </div>
                                        <div>
                                            <input type="text" name="user" value="<?= $post['user'] ?>"/>
                                        </div>
                                    </div>
                                    <div class="form-box-item">
                                        <div class="form-desc">
                                            数据库密码
                                        </div>
                                        <div>
                                            <input type="text" name="password" value="<?= $post['password'] ?>"/>
                                        </div>
                                    </div>
                                    <div class="form-box-item">
                                        <div class="form-desc">
                                            数据库名称
                                        </div>
                                        <div>
                                            <input type="text" name="name" value="<?= $post['name'] ?>"/>
                                        </div>
                                    </div>
                                    <div class="form-box-item">
                                        <div class="form-desc">
                                            数据表前缀
                                        </div>
                                        <div>
                                            <input type="text" name="prefix" value="<?= $post['prefix'] ?>"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mounted-item">
                                <div class="content-header mt16">
                                    管理选项
                                </div>
                                <div class="content-form">

                                    <div class="form-box-item">
                                        <div class="form-desc">
                                            管理员账号
                                        </div>
                                        <div>
                                            <input type="text" name="admin_user" value="<?= $post['admin_user'] ?>"/>
                                        </div>
                                    </div>
                                    <div class="form-box-item">
                                        <div class="form-desc">
                                            管理员密码
                                        </div>
                                        <div>
                                            <input type="password" name="admin_password"
                                                   value="<?= $post['admin_password'] ?>"/>
                                        </div>
                                    </div>
                                    <div class="form-box-item">
                                        <div class="form-desc">
                                            确认密码
                                        </div>
                                        <div>
                                            <input type="password" name="admin_confirm_password"
                                                   value="<?= $post['admin_confirm_password'] ?>"/>
                                        </div>
                                    </div>
                                    <div class="form-box-check">
                                        <div class="form-desc"></div>
                                        <div style="display: flex;align-items: center;">
                                            <input type="checkbox" name="import_test_data"
                                                   <?php if ($post['import_test_data'] == 'on'): ?>checked<?php endif; ?>
                                                   title="导入测试数据"/>
                                            <div style="color: #666666;">&nbsp;导入测试数据</div>
                                        </div>
                                    </div>
                                    <div class="form-box-check">
                                        <div class="form-desc"></div>
                                        <div style="display: flex;align-items: center;">
                                            <input type="checkbox" name="clear_db"
                                                   <?php if ($post['clear_db'] == 'on'): ?>checked<?php endif; ?>
                                                   title="清空现有数据"/>
                                            <div style="color: #666666;">&nbsp;清空现有数据</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php } ?>

                    <!-- 安装中 -->
                    <?php if ($step == '4' or $step == '5') { ?>
                        <div class="mounted-content-item show">
                            <?php if ($step == '4') { ?>
                                <div id="mounting">
                                    <div class="content-header">
                                        正在安装中
                                    </div>
                                    <div class="mounting-container " id="install_message">
                                        <?php if (count($successTables) > 0): ?>
                                            <p style="margin-bottom: 4px;">成功创建数据库：<?= $post['name'] ?></p>
                                        <?php endif; ?>
                                    </div>
                                </div>
                            <?php } ?>

                            <?php if ($step == '5') { ?>
                                <div class="show" id="mounting-success">
                                    <div class="content-header">
                                        安装成功
                                    </div>
                                    <div class="success-content">
                                        <div style="width: 48px;height: 48px;">
                                            <img src="./images/icon_mountSuccess.png"/>
                                        </div>
                                        <div class="mt16 result">安装完成，进入管理后台</div>
                                        <div style="margin-top: 5px;font-size:14px;">版本号：2.5.7.20210811</div>
                                        <div class="tips">
                                            为了您站点的安全，安装完成后即可将网站根目录下的“install”文件夹删除，或者config/install.lock/目录下创建install.lock文件防止重复安装。
                                        </div>
                                        <div class="btn-group">
                                            <a class="btn" href="/admin" style="margin-left: 20px;">进入管理平台</a>
                                        </div>
                                    </div>
                                </div>
                            <?php } ?>
                        </div>
                    <?php } ?>
                </div>
            </form>
            <?php if ($step == '1') { ?>
                <div class="item-btn-group show">
                    <button class="accept-btn" onclick="goStep(<?php echo $nextStep ?>)">我已阅读并同意</button>
                </div>
            <?php } elseif (in_array($step, ['2', "3"])) { ?>
                <div class="item-btn-group show">
                    <button class="cancel-btn" onclick="cancel()" style="padding: 7px 63px;margin-right: 16px">返回
                    </button>
                    <?php if ($modelInstall->getAllowNext()): ?>
                        <button class="accept-btn" onclick="goStep(<?php echo $nextStep ?>)" style="padding: 7px 63px;">
                            继续
                        </button>
                    <?php else: ?>
                        <button class="accept-btn" onclick="goStep(<?php echo $step ?>)" style="padding: 7px 63px;">重新检查
                        </button>
                    <?php endif; ?>
                </div>
            <?php } elseif ($step == "4") { ?>
                <div class="item-btn-group show">
                    <button class="disabled-btn" disabled="disabled">
                        <div class="layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop"></div>
                        <div style="font-size: 14px;margin-left: 7px;">正在安装中...</div>
                    </button>
                </div>
            <?php } ?>

        </div>
    </div>
    <footer>
        Copyright © 2019-<?=date('Y')?> XXX科技有限公司
    </footer>
    <script src="https://www.layuicdn.com/layui/layui.js"></script>
    <?php if (count($successTables) > 0): ?>
        <script>var successTables = eval(<?=json_encode($successTables) ?>); </script>
    <?php endif; ?>
    <script src="./js/mounted.js"></script>
    </body>
    </html>
<?php if ($message != ''): ?>
    <script>alert('<?=$message; ?>');</script>
<?php endif; ?>