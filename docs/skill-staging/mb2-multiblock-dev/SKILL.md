---
name: mb2-multiblock-dev
description: 开发 Minecraft 1.21.1 + Multiblocked2(MB2) 21.1.x + LDLib2 的多方块/单方块机器时调用。以问卷方式引导收集控制方块、结构、配方类型、IO/Trait、UI、验证目标，并直接生成可落地到整合包的 MB2+KubeJS 脚本与文档。非 MB2（如 MI 多方块）不适用。
---

# MB2 多方块机器开发

目标：让用户描述一个 MB2 机器（单方块或多方块），产出能落地到 `aimodpack-dev` 的 KubeJS 脚本与说明。**技术优先、美术 GUI 次之**；Jade 商用禁用；跨 mod 引用一律用 `#c:tag`；只按需加依赖。

## 工作流：先问卷，再生成

不要直接动手写代码。按下面 7 项**依次**用中文向用户提问（用户逐项回答；回答完整才进入下一步）：

1. **控制方块**：主方块/控制器是哪个 mod 的哪个方块（如 `mekanism:metallurgic_infuser`）？是否必须是多方块结构中央位置（3×3 面中央）？
2. **机器类型**：单方块 single 还是真多方块 multiblock？若多方块，尺寸与轮廓（如 3×3×3）？
3. **配方类型**：配方类型 ID（`<modid>:<name>`）？要承接哪个模组的哪类配方（如 Mek 冶金灌注机配方 `mekanism:metallurgic_infusing`）？还是自定义内容配方？
4. **IO/Trait**：需要哪些输入/输出能力——物品槽、流体槽、Mek 化学品、FE、耐久等？各槽数量与容量？
5. **UI**：默认自动生成 UI，还是需要定制（LDLib2 UI，美术次之）？
6. **结构谓词/成员方块**：结构框架用什么方块（须真实方块，避免 startup 期 air 问题）？哪些位置是控制器、哪些是框架、哪些是空气？
7. **验证目标**：JEI 配方展示？游戏内搭建测试？还是两者都要？

## 生成规则

- 落盘位置：`D:\aimodpacks\aimodpack-dev\run\kubejs\startup_scripts\`（机器/配方类型注册）、`server_scripts\`（配方/机器事件）、`client_scripts\`（视觉）。
- 配方用官方 schema（见 references/mb2-kubejs-api.md）：`event.recipes.<modid>.<recipeType>()`，显式 `.id(...)`、`.duration(...)`、`.inputItems/.inputFluids/.inputChemicals/.inputFE/.outputItems`；modifier callback 用 `.chance(p, r => ...)`。
- 机器注册用 `MBDRegistryEvents.machine/recipeType`；复杂状态/Trait/渲染器/Pattern 只能靠 MBD2 编辑器项目导出（KubeJS 不暴露），提醒用户去 `/mbd2_editor`。
- 事件订阅一律带目标 ID：`MBDMachineEvents.<event>('机器定义ID', ...)` / `MBDRecipeTypeEvents.<event>('配方类型ID', ...)`。
- 已知未修问题（勿自动尝试修复，除非用户点名）：结构谓词退化为空气、JEI 配方不显示。生成时主动提示并在脚本里用运行时方块解析规避 air。
- 文件 UTF-8 无 BOM；脚本注释用中文；JSON 不写注释。
- 动态 UI 文本用 Label + SupplierDataSource.bindDataSource，不要用 TextElement.bindDataSource；开关状态写入 machine.customData 并由 onBeforeRecipeWorking 兜底拦截。
- 热值/动态并行在 onBeforeRecipeModify 临时应用、onAfterRecipeModify 恢复，热值变化后按需 markLastRecipeDirty()；UI/Jade 读同步字段而不是猜客户端运行态。

## 关键速记

- 加载阶段：Startup=注册（`MBDRegistryEvents`），Server=配方/行为（`ServerEvents.recipes`/`MBDMachineEvents.*`/`MBDRecipeTypeEvents.*`），Client=视觉钩子。
- 内容方法全表、事件表、Rhino 踩坑见 references/mb2-kubejs-api.md；GUI/UI 开发路线见 references/ldlib2-ui.md；复杂机器 UI、开关、热值/动态并行、Jade、耐久槽位见 references/machine-ui-switch-overclock.md；写脚本前先查 ProbeJS dump（run/.probe，见 mb2-kubejs-api.md 第 6 节）获取精确签名。
- 文档：LowDragMC-Doc 中文站 `zh/multiblocked2/KubeJS/{index,recipe,event}.html`；LDLib2 `zh/ldlib2/`。本地经验：`D:\aimodpacks\modpackskill\skill\13-mb2-kubejs-multiblocks.md`。
- 机器创作边界：KubeJS 只能建基础 single/multiblock 定义；完整编辑器配置走编辑器项目。
