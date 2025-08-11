import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta = {
  title: "Design System/PMG Colors",
  parameters: {
    docs: {
      description: {
        component:
          "PMG color palette demonstration to verify Tailwind CSS colors are working properly.",
      },
    },
  },
};

export default meta;
type Story = StoryObj;

export const ColorPalette: Story = {
  render: () => ({
    template: `
      <div class="p-6 space-y-6">
        <h2 class="text-2xl font-bold text-pmg-900 mb-4">PMG Color Palette</h2>
        
        <div class="grid grid-cols-5 gap-4">
          <div class="text-center">
            <div class="w-16 h-16 bg-pmg-50 border border-pmg-200 rounded-lg mb-2"></div>
            <div class="text-sm font-medium text-pmg-900">PMG 50</div>
            <div class="text-xs text-pmg-600">#ECF1F8</div>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-pmg-100 border border-pmg-200 rounded-lg mb-2"></div>
            <div class="text-sm font-medium text-pmg-900">PMG 100</div>
            <div class="text-xs text-pmg-600">#DAE3F1</div>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-pmg-200 border border-pmg-200 rounded-lg mb-2"></div>
            <div class="text-sm font-medium text-pmg-900">PMG 200</div>
            <div class="text-xs text-pmg-600">#B4C6E4</div>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-pmg-300 border border-pmg-200 rounded-lg mb-2"></div>
            <div class="text-sm font-medium text-pmg-900">PMG 300</div>
            <div class="text-xs text-pmg-600">#8FAAD6</div>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-pmg-400 border border-pmg-200 rounded-lg mb-2"></div>
            <div class="text-sm font-medium text-white">PMG 400</div>
            <div class="text-xs text-white">#698EC9</div>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-pmg-500 border border-pmg-200 rounded-lg mb-2"></div>
            <div class="text-sm font-medium text-white">PMG 500</div>
            <div class="text-xs text-white">#4472BB</div>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-pmg-600 border border-pmg-200 rounded-lg mb-2"></div>
            <div class="text-sm font-medium text-white">PMG 600</div>
            <div class="text-xs text-white">#365B96</div>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-pmg-700 border border-pmg-200 rounded-lg mb-2"></div>
            <div class="text-sm font-medium text-white">PMG 700</div>
            <div class="text-xs text-white">#26406A</div>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-pmg-800 border border-pmg-200 rounded-lg mb-2"></div>
            <div class="text-sm font-medium text-white">PMG 800</div>
            <div class="text-xs text-white">#1B2D4B</div>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-pmg-900 border border-pmg-200 rounded-lg mb-2"></div>
            <div class="text-sm font-medium text-white">PMG 900</div>
            <div class="text-xs text-white">#0E1725</div>
          </div>
        </div>
        
        <div class="mt-8">
          <h3 class="text-lg font-semibold text-pmg-800 mb-3">Interactive Elements</h3>
          <div class="space-y-3">
            <button class="bg-pmg-600 hover:bg-pmg-700 text-white px-4 py-2 rounded-lg transition-colors">
              Primary Button
            </button>
            <div class="p-4 bg-pmg-50 border border-pmg-200 rounded-lg">
              <p class="text-pmg-700">This is a PMG-themed info box</p>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};
